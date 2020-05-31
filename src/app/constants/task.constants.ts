export const taskTypeList = [
  {
    name: 'Epic',
    value: 'Epic',
    icon: 'flash_on',
    color: '#3cd8e6',
  },
  {
    name: 'User Story',
    value: 'User Story',
    icon: 'bookmark',
    color: '#e6b33c',
  },
  {
    name: 'Task',
    icon: 'check_box',
    value: 'Task',
    color: '#3c3ce6',
  },
  {
    name: 'New Feature',
    value: 'New Feature',
    icon: 'add_box',
    color: '#3ce65e',
  },
  {
    name: 'Bug',
    value: 'Bug',
    icon: 'bug_report',
    color: '#e63c3c',
  },
];

export const taskPriorityList =
  [
    {
      name: 'Blocker',
      value: 'Blocker',
      icon: 'block',
      color: '#ff3245',
    },
    {
      name: 'Critical',
      value: 'Critical',
      icon: 'warning',
      color: '#ff3245',
    },
    {
      name: 'Major',
      value: 'Major',
      icon: 'expand_less',
      color: '#ff3245',
    },
    {
      name: 'Minor',
      value: 'Minor',
      icon: 'expand_more',
      color: '#67ff8b',
    },
    {
      name: 'Trivial',
      value: 'Trivial',
      icon: 'arrow_downward',
      color: '#67ff8b',
    },
  ];

export const taskStatusList = {
  TODO: 'To Do',
  PROGRESS: 'In Progress',
  TESTING: 'In Testing',
  DONE: 'Done',
};

export const taskResolutionList =
  [
    {
      name: 'Done',
      icon: '',
      color: '',
    },
    {
      name: 'Fixed',
      icon: '',
      color: '',
    },
    {
      name: 'Unresolved',
      icon: '',
      color: '',
    },
    {
      name: 'Done',
      icon: '',
      color: '',
    },
  ];

export const unassignedIcon = 'sentiment_satisfied_alt';
export const assigneeIconDefault = 'face';
export const unassignedIconColor = '#676767';
export const assigneeIconColorDefault = '#000000';
export const unassignedSelectOption = { name: 'Unassigned', value: 'unassigned', icon: unassignedIcon, color: unassignedIconColor };
