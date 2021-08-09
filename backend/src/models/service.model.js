// 1. Feladat: pótold a service modellt.
const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        since: {
            type: Number,
            default: 0,
            required: true,
        },
        street: String,
        city: String,
        coutry: String,
        active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Service', ServiceSchema);

/*
export class Service {
    _id: string = '';
    name: string = '';
    since: number = 0;
    street?: string = '';
    city?: string = '';
    country?: string = '';
    active?: boolean = true;
  }
*/
