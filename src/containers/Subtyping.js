import React, { PureComponent } from 'react';
// react-md
import FileInput from 'react-md/lib/FileInputs';
import Checkbox from 'react-md/lib/SelectionControls/Checkbox'
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons';
// Snackbar
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// redux
import { connect } from 'react-redux'
import { addJob } from '../actions'
// axios
import axios from 'axios'
import { OLD_API } from '../middleware/api'

class Subtyping extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      pi: 90,
      amr: true,
      serotype: true,
      vf: true,
      open: false,
      msg: ''
    }
  }
  _selectFile = (file) => {
    console.log(file)
    if (!file) { return; }
    this.setState({ file });
  }
  _updatePi = (value) => {
    this.setState({ pi: value });
  }
  _updateSerotype = (value) => {
    this.setState({ serotype: value })
  }
  _updateAmr = (value) => {
    this.setState({ amr: value })
  }
  _updateVf = (value) => {
    this.setState({ vf: value })
  }
  _handleSubmit = (e) => {
    e.preventDefault() // disable default HTML form behavior
    this.setState({
      open: true,
      msg: "Genomes were submitted"
    });
    axios.post(OLD_API + 'upload', {
      file: this.state.file,
      options: {
        pi: this.state.pi,
        amr: this.state.amr,
        serotype: this.state.serotype,
        vf: this.state.vf
      }
    }).then(response => {
      console.log(response)
    })
  };
  // Snackbar
  _handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  render(){
    const { file, pi, amr, serotype, vf } = this.state
    return (
      <div>
        <form className="md-text-container md-grid">
          <div className="md-cell md-cell--12">
            <FileInput
              id="inputFile"
              secondary
              label="Select File(s)"
              onChange={this._selectFile}
              multiple
            />
            <Checkbox
              id="serotype"
              name="check serotype"
              checked={serotype}
              onChange={this._updateSerotype}
              label="Serotype"
            />
            <Checkbox
              id="vf"
              name="check vf"
              checked={vf}
              onChange={this._updateVf}
              label="Virulence Factors"
            />
            <Checkbox
              id="amr"
              name="check amr"
              checked={amr}
              onChange={this._updateAmr}
              label="Antimicrobial Resistance"
            />
            <TextField
              id="pi"
              value={pi}
              onChange={this._updatePi}
              helpText="Percent Identity for BLAST"
            />
            <Button
              raised
              secondary
              type="submit"
              label="Submit"
              disabled={!file}
              onClick={this._handleSubmit}
            />
          </div>
        </form>
        <MuiThemeProvider>
          <Snackbar
            open={this.state.open}
            message={this.state.msg}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

Subtyping = connect()(Subtyping)

export default Subtyping