import React from 'react';
import List from './List';
import Error from './Error';
import { getPics } from 'ic-rn-cc/api';

export default class extends React.Component {
  state = {
    data: [],
    after: null,
    loading: false,
    error: null,
  };

  showNewPics = ({ children, after }) => {
    this.setState(({ data }) => ({
      data: data.concat(children),
      after,
      loading: false,
    }));
  };

  showError = ({ message }) => {
    this.setState({ loading: false, error: message });
  };

  loadPics = reset => {
    if (this.state.loading) {
      return;
    }
    const { data, after } = reset ? { data: [], after: null } : this.state;
    this.setState({ data, after, loading: true, error: null }, () => {
      getPics(after).then(this.showNewPics, this.showError);
    });
  };

  refreshPics = () => this.loadPics(true);

  loadMorePics = () => this.loadPics(false);

  onSelectItem = item => console.log('Selected', item);

  componentDidMount() {
    this.refreshPics();
  }

  render() {
    const { data, loading, error } = this.state;
    if (error) {
      return <Error error={error} onRetry={this.refreshPics} />;
    }
    return (
      <List
        data={data}
        refreshing={loading && data.length == 0}
        onRefresh={this.refreshPics}
        onEndReached={this.loadMorePics}
        onSelectItem={this.onSelectItem}
      />
    );
  }
}
