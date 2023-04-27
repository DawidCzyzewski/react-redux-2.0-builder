// It's good to create something like enum if it is constant for all project to avoid errors if we write somewhere badly
// Something like enum to status:
export const statusFilters = Object.freeze({
  all: "all",
  active: "active",
  completed: "completed",
});

// statusFilters.active;

// But I can use name of this  and overwrite this somewhere becouse const don't let me change type or value, but don't checking inside object or array:
// statusFilters = "cookie";
// So I made it unmutual (Object.freeze)
