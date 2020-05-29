const { Model } = require('objection')

class CityModel extends Model {
  static get tableName() {
    return 'someTableName';
  }
}

module.exports = MinimalModel