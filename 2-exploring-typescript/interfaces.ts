interface Employee {
  name: string;
  id: number;
  isManager: boolean;
  getUniqueId: () => string;
}

const linda: Employee = {
  name: 'Linda',
  id: 1,
  isManager: true,
  getUniqueId: (): string => {
    let uniqueId = linda.id + '-' + linda.name;
    if (linda.isManager) {
      return 'mgr-' + uniqueId;
    }
    return 'emp-' + uniqueId;
  },
};

const pam: Employee = {
  name: 'Linda',
  id: 2,
  isManager: false,
  getUniqueId: (): string => {
    let uniqueId = pam.id + '-' + pam.name;
    if (pam.isManager) {
      return 'mgr-' + uniqueId;
    }
    return 'emp-' + uniqueId;
  },
};

console.log(linda.getUniqueId());
console.log(pam.getUniqueId());
