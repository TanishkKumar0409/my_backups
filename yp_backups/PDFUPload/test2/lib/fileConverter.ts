import * as XLSX from 'xlsx';
import mammoth from 'mammoth';

export interface ConversionResult {
  success: boolean;
  csvContent?: string;
  error?: string;
}

/**
 * Convert XLSX file to CSV format
 */
export async function convertXlsxToCsv(buffer: Buffer): Promise<ConversionResult> {
  try {
    // Read the Excel file
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    
    // Get the first worksheet
    const firstSheetName = workbook.SheetNames[0];
    if (!firstSheetName) {
      return { success: false, error: 'No worksheets found in Excel file' };
    }
    
    const worksheet = workbook.Sheets[firstSheetName];
    
    // Convert to CSV
    const csvContent = XLSX.utils.sheet_to_csv(worksheet);
    
    if (!csvContent.trim()) {
      return { success: false, error: 'Excel file appears to be empty' };
    }
    
    return { success: true, csvContent };
  } catch (error) {
    console.error('Error converting XLSX to CSV:', error);
    return { success: false, error: 'Failed to convert Excel file to CSV' };
  }
}

/**
 * Convert DOCX file to plain text (CSV-like format)
 */
export async function convertDocxToText(buffer: Buffer): Promise<ConversionResult> {
  try {
    // Extract text from DOCX
    const result = await mammoth.extractRawText({ buffer });
    
    if (!result.value.trim()) {
      return { success: false, error: 'Word document appears to be empty' };
    }
    
    // Convert text to CSV-like format (each paragraph as a row)
    const lines = result.value
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(line => `"${line.replace(/"/g, '""')}"`) // Escape quotes for CSV
      .join('\n');
    
    const csvContent = `"Content"\n${lines}`;
    
    return { success: true, csvContent };
  } catch (error) {
    console.error('Error converting DOCX to text:', error);
    return { success: false, error: 'Failed to convert Word document to text' };
  }
}

/**
 * Main conversion function that handles different file types
 */
export async function convertFileToText(buffer: Buffer, mimeType: string, fileName: string): Promise<ConversionResult> {
  try {
    if (mimeType.includes('spreadsheet') || mimeType.includes('xlsx') || fileName.toLowerCase().endsWith('.xlsx')) {
      return await convertXlsxToCsv(buffer);
    }
    
    if (mimeType.includes('wordprocessing') || mimeType.includes('docx') || fileName.toLowerCase().endsWith('.docx')) {
      return await convertDocxToText(buffer);
    }
    
    return { success: false, error: 'Unsupported file type for conversion' };
  } catch (error) {
    console.error('Error in file conversion:', error);
    return { success: false, error: 'File conversion failed' };
  }
}