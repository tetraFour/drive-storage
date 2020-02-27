import MainSection from "../../components/mainSection";
import SharedFiles from "../../components/main-partials/sharedFiles";
import FileRequest from "../../components/main-partials/fileRequest";
import Starred from "../../components/main-partials/starred";
import Trash from "../../components/main-partials/trash";
import Stat from "../../components/main-partials/stat";
import Task from "../../components/main-partials/task";
import Settings from "../../components/main-partials/settings";
import Tips from "../../components/main-partials/tips";

export const routes = [
  {
    path: "/",
    exact: true,
    component: MainSection,
    imgSrc: "/images/icons/my-drive.svg",
    alt: "My Drive",
    isOnNavBar: true
  },
  {
    path: "/shared_files",
    component: SharedFiles,
    imgSrc: "/images/icons/shared-files.svg",
    alt: "Shared Files",
    isOnNavBar: true
  },
  {
    path: "/file_request",
    component: FileRequest,
    imgSrc: "/images/icons/file-requests.svg",
    alt: "File Requests",
    isOnNavBar: true
  },
  {
    path: "/starred",
    component: Starred,
    imgSrc: "/images/icons/starred.svg",
    alt: "Starred",
    isOnNavBar: true
  },
  {
    path: "/trash",
    component: Trash,
    imgSrc: "/images/icons/trash.svg",
    alt: "Trash",
    isOnNavBar: true
  },
  {
    path: "/stat",
    component: Stat,
    imgSrc: "/images/icons/statistics.svg",
    alt: "Statistics",
    isOnNavBar: true
  },
  {
    path: "/task",
    component: Task,
    imgSrc: "/images/icons/task.svg",
    alt: "Task",
    isOnNavBar: true
  },
  {
    path: "/settings",
    component: Settings,
    isOnNavBar: false
  },
  {
    path: "/tips",
    component: Tips,
    isOnNavBar: false
  }
];
