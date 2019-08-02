import { isEmpty, values } from 'ramda';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions';

class Items extends Component {
  state = {
    haveItemsBeenRemoved: false
  };

  static defaultProps = {
    items: []
  };

  componentDidMount() {
    const { handleHydration } = this.props;
    handleHydration();
  }

  handleRemoveClick = () => {
    this.setState({ haveItemsBeenRemoved: true });
  };

  renderItem(item) {
    return <li key={item.id}>{item.title}</li>;
  }

  renderItems() {
    const { items = [] } = this.props;

    return (
      <div>
        <button
          data-test-id="items-removal-cta"
          onClick={this.handleRemoveClick}
        >
          Remove all items
        </button>
        <ul>{items.map(this.renderItem)}</ul>
      </div>
    );
  }

  renderEmpty() {
    return <div data-test-id="item-empty-state">There are no items</div>;
  }

  render() {
    const { items } = this.props;

    if (isEmpty(items) || this.state.haveItemsBeenRemoved) {
      return this.renderEmpty();
    }

    return this.renderItems();
  }
}

export default connect(
  state => {
    return {
      items: values(state.data.items)
    };
  },
  { handleHydration: fetchItems }
)(Items);
