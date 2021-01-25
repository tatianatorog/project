import axios from "../../axios";

const updateUserInfo = async (id) => {
  const res = await axios.put(id, {
    data: {
      ...user,
      user_email: email,
      language_code: language.value ? language.value : user.language_code,
      displayed_timezone: timezone.value
        ? timezone.value
        : user.displayed_timezone,
      theme_name: theme.value ? theme.value : user.theme_name,
      ENABLED_FEATURES: {
        CERTIFICATES_INSTRUCTOR_GENERATION: instructor,
        INSTRUCTOR_BACKGROUND_TASKS: background,
        ENABLE_COURSEWARE_SEARCH: courseware,
        ENABLE_COURSE_DISCOVERY: course,
        ENABLE_DASHBOARD_SEARCH: dashboard,
        ENABLE_EDXNOTES: edxnotes,
      },
    },
  });
  return res.data.data;
};

export default updateUserInfo;