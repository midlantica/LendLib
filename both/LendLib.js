lists = new Mongo.Collection("lists");

lists.allow({
  insert: function(userId, doc){
    return (adminUser(userId) || (userId && doc.owner === userId));
  },
  update: function(userId, docs, fields, modifier){
    return (adminUser(userId) || (userId && docs.owner === userId));
  },
  remove: function(userId, docs){
    return (adminUser(userId) || (userId && docs.owner === userId));
  }
});

