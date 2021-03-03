import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppLayout from "../component/App";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  saveEdit,
  cancelEdit,
  clearChecked,
} from "../actions/index";

// Container for the majority of the Redux state.
const appPropTypes = {
  handleAddTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleTodoToggle: PropTypes.func.isRequired,
  handleSelectEditTodo: PropTypes.func.isRequired,
  handleSaveEdit: PropTypes.func.isRequired,
  handleEditCancel: PropTypes.func.isRequired,
  handleClearChecked: PropTypes.func.isRequired,
};

class App extends Component {
  handleAddTodo = (itemValue) => this.props.handleAddTodo(itemValue);
  handleDeleteTodo = (selectedItemId) =>
    this.props.handleDeleteTodo(selectedItemId);
  handleTodoToggle = (modifiedItem) =>
    this.props.handleTodoToggle(modifiedItem);
  handleSelectEditTodo = (id) => this.props.handleSelectEditTodo(id);
  handleSaveEdit = (modifiedItem) => this.props.handleSaveEdit(modifiedItem);
  handleEditCancel = (selectedItemId) =>
    this.props.handleEditCancel(selectedItemId);
  handleClearChecked = (selectedItemId) =>
    this.props.handleClearChecked(selectedItemId);

  render() {
    return <AppLayout {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  items: state.todos.items,
  editingTodo: state.todos.editingTodo,
});

const mapDispatchToProps = {
  handleAddTodo: addTodo,
  handleDeleteTodo: deleteTodo,
  handleTodoToggle: toggleTodo,
  handleSelectEditTodo: editTodo,
  handleSaveEdit: saveEdit,
  handleEditCancel: cancelEdit,
  handleClearChecked: clearChecked,
};

App.propTypes = appPropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(App);
