const router = require("express").Router();

const {
  getAllJobs,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getSingleJob).delete(deleteJob).patch(updateJob);

module.exports = router;
