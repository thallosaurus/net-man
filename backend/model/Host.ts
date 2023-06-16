import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class Host extends Model {

}

Host.init({
    macAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize
})
