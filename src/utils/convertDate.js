import moment from "moment";

export default function convertDate(date) {
  return moment.unix(date).calendar();
}
