import React from 'react';
import ReactDOM from 'react-dom';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import Resume from './resume.js';

class PDF extends React.Component {
    pdfExportComponent;
    grid;

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <div className="example-config">
                    <button className="k-button" onClick={this.exportPDFWithComponent}>Print Resume</button>
                    &nbsp;
                    {/* <p onClick={window.print()}></p> */}
                </div>

                <PDFExport ref={(component) => this.pdfExportComponent = component} paperSize="A1">
                    <Resume/>
                </PDFExport>
            </div>
        );
    }

    exportPDFWithComponent = () => {
        this.pdfExportComponent.save();
    }
}


export default PDF;