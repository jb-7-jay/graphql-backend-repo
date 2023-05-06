const Users = require("./user.model");

const buildSaveUserJson = (props) => {
  const json = {};
  json.name = props.name;
  json.email = props.email || null;
  json.mobile = props.mobile;
  json.gender = props.gender || null;
  json.country = props.country;
  json.city = props.city || null;
  return json;
};

module.exports.saveUser = async (props) => {
  const user = new Users(buildSaveUserJson(props));
  const result = await user.save()
  return result
};
