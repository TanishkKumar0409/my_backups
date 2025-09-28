import mongoose, { Document, Schema } from 'mongoose';

export interface ILink extends Document {
  _id: string;
  userId: string;
  title: string;
  url: string;
  description?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const LinkSchema = new Schema<ILink>({
  userId: {
    type: String,
    required: [true, 'User ID is required'],
    index: true,
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  url: {
    type: String,
    required: [true, 'URL is required'],
    trim: true,
    match: [/^https?:\/\/.+/, 'Please enter a valid URL'],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true,
  }],
}, {
  timestamps: true,
});

export default mongoose.models.Link || mongoose.model<ILink>('Link', LinkSchema);