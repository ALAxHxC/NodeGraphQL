import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Search from './components/Search';
import logo from './logo.svg';
import './App.css';

const GET_BOOKS = gql`
  {
    books {
      _id
      title
      author
    }
  }
`;



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    alert('A name was submitted: ' + this.state.value);

  }

  render() {
    return (
      <Query pollInterval={500} query={GET_BOOKS} >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <div className="container">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    LIST OF BOOKS
                  </h3>
                  <h4><Link to="/create">Add Book</Link></h4>
                </div>


                <div className="panel-body">
                  <Search></Search>
                  <table className="table table-stripe">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Author</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.books.map((book, index) => (
                        <tr key={index}>
                          <td><Link to={`/show/${book._id}`}>{book.title}</Link></td>
                          <td>{book.title}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        }}
      </Query >
    );
  }
}

export default App;
