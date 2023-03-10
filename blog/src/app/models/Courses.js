const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String, maxLength: 300},
    image: { type: String, maxLength: 10000 },
    videoId: { type: String, required: true },
    level: { type: String, maxLength: 300 },
    slug: { type: String, slug: 'name', unique: true },
},{
    timestamps: true,
});

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
  