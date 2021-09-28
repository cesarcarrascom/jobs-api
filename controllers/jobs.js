const getAllJobs = async (req, res) => {
  res.send("get all jobs");
};

const getSingleJob = async (req, res) => {
  res.send("get single jobs");
};

const createJob = async (req, res) => {
  res.send("Create jobs");
};

const updateJob = async (req, res) => {
  res.send("update jobs");
};

const deleteJob = async (req, res) => {
  res.send("Delete jobs");
};

module.exports = {
  getAllJobs,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
};
