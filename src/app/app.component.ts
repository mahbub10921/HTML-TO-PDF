import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {




  title = 'angular-to-pdf';
  public convetToPDF()
{
var data = document.getElementById('contentToConvert');
html2canvas(data!).then(canvas => {

var imgWidth = 208;

var imgHeight = canvas.height * imgWidth / canvas.width;


const contentDataURL = canvas.toDataURL('image/png')  // Convert the canvas to a data URL (base64-encoded image).
let pdf = new jspdf('p', 'mm', 'a4'); // 'p' for portrait orientation, 'a4' for page size.
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save('new-file.pdf'); // Generated PDF
});
}
}


