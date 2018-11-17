import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Form, Input, Select } from 'components/forms';
import Button from 'components/Button';
import { addLink } from 'ducks/links';

const selectOptions = [
  { value: 'Video' },
  { value: 'Tutorial' },
  { value: 'Article' },
  { value: 'StackOverflow' },
  { value: 'Github' },
  { value: 'Reddit' },
  { value: 'Other' },
];

class AddLinkPage extends Component {
  state = {
    linkData: {
      url: '',
      title: '',
      category: selectOptions[0].value,
    },
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      linkData: {
        ...this.state.linkData,
        [e.target.name || e.target.value]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username } = this.props;
    this.props.addLink({ ...this.state.linkData, username });
  };

  render() {
    return (
      <Container>
        <h2>Add Link</h2>
        <Form onSubmit={this.handleSubmit}>
          <Input
            placeholder="Url"
            label="Url"
            name="url"
            onChange={this.handleChange}
            required
          />
          <Input
            placeholder="Title"
            label="Title"
            name="title"
            onChange={this.handleChange}
            required
          />
          <Select
            options={selectOptions}
            label="Category"
            name="category"
            onChange={this.handleChange}
          />
          <Button type="submit" text={'Submit'} />
        </Form>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 1.2rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50rem;
  }

  select {
    margin-bottom: 2rem;
  }

  button {
    margin-left: auto;
  }
`;

const mapStateToProps = (state) => ({
  username: state.user.user_metadata.full_name,
});

export default connect(
  mapStateToProps,
  { addLink }
)(AddLinkPage);
