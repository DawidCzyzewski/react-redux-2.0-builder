import { useDispatch, useSelector } from "react-redux";

import { statusFilters } from "../../redux/constants";
import { Button } from "../Button/Button";
import { getStatusFilter } from "../../redux/selectors";

import styles from "./StatusFilter.module.css";
import { setStatusFilter } from "../../redux/actions";

// I want to render Status element:
export const StatusFilter = () => {
  // Get a link to the action dispatch function
  const dispatch = useDispatch();

  // I want to read which status is actual active, so I use useSelector:
  const filter = useSelector(getStatusFilter);

  //  Call the action generator and pass the filter value
  // Sending the result - filter change action
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));
  return (
    <>
      <div className={styles.wrapper}>
        <Button
          onClick={() => handleFilterChange(statusFilters.all)}
          type="button"
          selected={filter === statusFilters.all}
        >
          All
        </Button>
        <Button
          onClick={() => handleFilterChange(statusFilters.active)}
          type="button"
          selected={filter === statusFilters.active}
        >
          Active
        </Button>
        <Button
          onClick={() => handleFilterChange(statusFilters.completed)}
          type="button"
          selected={filter === statusFilters.completed}
        >
          Completed
        </Button>
      </div>
    </>
  );
};
