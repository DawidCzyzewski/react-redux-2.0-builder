import { useSelector } from "react-redux";

// Instead of using many times useSelector(state=>state.filters.status) or even here like this:
// export const getStatusFilter = useSelector((state) => state.filters.status);
// Change it into function to export
export const getStatusFilter = (state) => state.filters.status;

// I will do the same with tasks:
export const getTasks = (state) => state.tasks;
