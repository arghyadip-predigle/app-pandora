import { Component, Input } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
})
export class PdfViewerComponent {
  // Input property to receive the PDF source URL from the parent component
  @Input() pdfSrc: string = '';

  // Properties to manage the state of the PDF viewer
  page: number = 1;
  totalPages: number = 0;
  isLoaded: boolean = false;
  zoom: number = 1; // Start at 70% zoom to match the design

  /**
   * This function is called by the library after the PDF has finished loading.
   * @param pdf The proxy object for the loaded PDF document.
   */
  afterLoadComplete(pdf: PDFDocumentProxy): void {
    this.totalPages = pdf.numPages;
    this.isLoaded = true;
  }

  nextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
    }
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
    }
  }

  zoomIn(): void {
    this.zoom += 0.1;
  }

  zoomOut(): void {
    if (this.zoom > 0.2) {
      this.zoom -= 0.1;
    }
  }
}
