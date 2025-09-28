import mongoose, { Document, Schema } from 'mongoose';

export interface IFile extends Document {
  _id: string;
  userId: string;
  filename: string;
  originalName: string;
  fileUrl: string;
  description?: string;
  fileSize: number;
  mimeType: string;
  uploadedAt: Date;
}

const FileSchema = new Schema<IFile>({
  userId: {
    type: String,
    required: [true, 'User ID is required'],
    index: true,
  },
  filename: {
    type: String,
    required: [true, 'Filename is required'],
    trim: true,
  },
  originalName: {
    type: String,
    required: [true, 'Original name is required'],
    trim: true,
  },
  fileUrl: {
    type: String,
    required: [true, 'File URL is required'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  fileSize: {
    type: Number,
    required: [true, 'File size is required'],
  },
  mimeType: {
    type: String,
    required: [true, 'MIME type is required'],
  },
}, {
  timestamps: { createdAt: 'uploadedAt', updatedAt: false },
});

export default mongoose.models.File || mongoose.model<IFile>('File', FileSchema);