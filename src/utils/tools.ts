import jsPDF from 'jspdf';
import { Product } from './types/product';
import autoTable, { UserOptions, Color, FontStyle } from 'jspdf-autotable'; 

export const exportPDF = (data: Product[], fileName: string): void => {
  const doc = new jsPDF('l');
  const headers = Object.keys(data[0]) as (keyof Product)[];

  const tableOptions: UserOptions = {
    head: [headers.map(header => header.toUpperCase())],
    startY: 20,
    styles: {
      font: 'helvetica',
      fontStyle: 'normal' as FontStyle,
      fillColor: [255, 255, 255] as Color,
      textColor: [0, 0, 0],
      lineColor: [0, 0, 0],
      lineWidth: 0.2,
    },
    headStyles: {
      fillColor: [211, 211, 211] as Color, 
      textColor: [0, 0, 0],
      fontStyle: 'bold' as FontStyle,
    },
    alternateRowStyles: {
      fillColor: [240, 240, 240] as Color, 
    },
    margin: { top: 20, bottom: 20 },
  };

  autoTable(doc, {
    ...tableOptions,
    body: data.map(row => headers.map(header => row[header]?.toString() || '')),
  });

  doc.save(`${fileName}.pdf`);
};

export const exportCSV = (data: Product[], fileName: string) => {
  if (!Array.isArray(data) || data.length === 0) {
    console.error('Los datos proporcionados no son un array válido.');
    return;
  }
  const keys = Object.keys(data[0]);

  const csvContent =
    keys.join(',') + '\n' +
    data.map(row => keys.map(key => row[key as keyof Product]?.toString() || '').join(',')).join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${fileName}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};