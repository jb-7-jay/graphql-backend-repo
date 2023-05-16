import Project from '../Project/project.model.js'
import Users from './user.model.js'

const buildSaveUserJson = (props) => {
  const json = {}
  json.name = props.name
  json.email = props.email || null
  json.mobile = props.mobile
  json.gender = props.gender || null
  json.country = props.country
  json.city = props.city || null
  return json
}

const saveUser = async (props) => {
  const user = new Users(buildSaveUserJson(props))
  const result = await user.save()
  return result
}

const deleteUserAndRelatedProject = async (userId) => {
  const result = await Promise.all([
    Project.deleteMany({ user: userId }),
    Users.findByIdAndDelete(userId),
  ])

  return result[1]
}

const userDao = {
  saveUser,
  deleteUserAndRelatedProject,
}

export default userDao
