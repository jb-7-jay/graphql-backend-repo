import Project from '../Project/project.model.js'

const buildSaveProjectJson = (props) => {
  const json = {}

  json.title = props.title
  json.description = props.description
  json.status = props.status
  json.user = props.user

  return json
}

const saveProject = async (props) => {
  const project = new Project(buildSaveProjectJson(props))
  return await project.save()
}

const deleteProject = async (projectId) => {
  const result = await Project.findByIdAndDelete(projectId)
  return result
}

const updateProject = async (props) => {
  const result = await Project.findByIdAndUpdate(
    props.id,
    {
      $set: {
        title: props.title,
        description: props.description,
        status: props.status,
      },
    },
    { new: true }
  )

  return result
}

const projectDao = {
  saveProject,
  deleteProject,
  updateProject,
}

export default projectDao
