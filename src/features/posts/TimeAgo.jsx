import { formatDistanceToNow } from "date-fns/esm";
import { parseISO } from "date-fns/esm";

const TimeAgo = ({ timeStamp }) => {
  let timeAgo = "";

  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timeStamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
