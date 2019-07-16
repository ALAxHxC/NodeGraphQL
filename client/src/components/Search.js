
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  state = {
    userName: '1030626898', password: 'jenizaro', jsonReturnedValue: []

  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick() {
    alert('A name was submitted: ' + this.state.value);

  }


  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <TextField
            id="text-field-default"
            floatingLabelText="Nit"
            type='string'
            value={this.state.userName}
            onChange={(event) => this.setState({ userName: event.target.value })} />
          <br />
          <Button variant="contained" color="primary"
            label='Buscar Guias'
            onClick={this.handleClick}>NIT</Button>
        </div>
      </div>
    );
  }
}
export default Search;