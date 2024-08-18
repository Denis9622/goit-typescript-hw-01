// Определяем enum для ролей пользователей
export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

function getRoleDescription(role: UserRole): string {
  return RoleDescription[role];
}

// Вывод описания ролей
console.log(getRoleDescription(UserRole.admin)); // "Admin User"
console.log(getRoleDescription(UserRole.editor)); // "Editor User"
console.log(getRoleDescription(UserRole.guest)); // "Guest User"