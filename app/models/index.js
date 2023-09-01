const Picture = require('./Picture');
const Site = require('./Site');
const State = require('./State');
const Techno = require('./Techno');

//** Association Site - State **//
// A Site has one State
Site.belongsTo(State, {
    as: 'stateOfSite',
    foreignKey: 'state_id'
});

// A State can have many Site
State.hasMany(Site, {
    as: 'sitesOfState',
    foreignKey: 'state_id'
});

//** Association Picture - Site **//
// A Picture belongs to one Site
Picture.belongsTo(Site, {
    as: 'siteOfPicture',
    foreignKey: 'site_id'
});

// A site can have many Picture
Site.hasMany(Picture, {
    as: 'picturesFromSite',
    foreignKey: 'site_id'
});

//** Association Site - Techno **//
// A Site can use many Techno
Site.belongsToMany(Techno, {
    through: 'site_use_techno',
    as: 'technosFromSite',
    foreignKey: 'site_id',
    otherKey: 'techno_id',
    timestamps: true,
    updatedAte: false
});

// A Techno can be used by many Site
Techno.belongsToMany(Site, {
    through: 'site_use_techno',
    as: 'sitesFromTechno',
    foreignKey: 'techno_id',
    otherKey: 'site_id',
    timestamps: true,
    updatedAte: false
});

module.exports = {
  Picture,
  Site,
  State,
  Techno
};