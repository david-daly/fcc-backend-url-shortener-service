import { Document, model, Schema } from 'mongoose';

const UrlSchema = new Schema({
    originalUrl: {
        required: true,
        type: String,
    },
});

export interface IUrl extends Document {
    originalUrl: string;
}

export const UrlModel = model<IUrl>('Url', UrlSchema);
