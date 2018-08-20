import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
    constructor(props){
        super(props);
        
    }
  render() {
    // Render nothing if the "show" prop is false
    //debugger;
    if(!this.props.show) {
      return null;
    }
    
    return (
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="modalCenter" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">{this.props.modalTitle}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.onCancel}>{this.props.cancelTitle}</button>
              <button type="button" className="btn btn-primary" onClick={this.props.onSave}>{this.props.saveTitle}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
  modalTitle: PropTypes.string.isRequired,
  cancelTitle: PropTypes.string.isRequired,
  saveTitle: PropTypes.string.isRequired
};

export default Modal;