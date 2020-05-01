import * as Yup from "yup";
import moment from "moment";

export const createMission = Yup.object().shape({
  missionTitle: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  missionNotes: Yup.string().min(2, "Too Short!").required("Required"),
  recipient: Yup.string().required("Required"),
  helper: Yup.string(),
  pickUpLocation: Yup.string().required("Required"),
  dropOffLocation: Yup.string().required("Required"),
  pickUpDate: Yup.string()
    .default(() => moment())
    .min(() => moment())
    .required("Required"),
  dropOffDate: Yup.string().required("Required"),
  pickUpTime: Yup.string()
    .required("Required")
    .test("is-greater", "Time cannot be earlier than today.", function (value) {
      return moment(value, "HH:mm").isSameOrAfter(moment(Date.now(), "HH:mm"));
    }),
  dropOffTime: Yup.string()
    .required("Required")
    .test("is-greater", "end time should be greater", function (value) {
      return moment(value, "HH:mm").isSameOrAfter(moment(Yup.ref("pickUpTime"), "HH:mm"));
    }),
});

export const profile = Yup.object().shape({
  displayName: Yup.string(),
  address: Yup.string(),
});
