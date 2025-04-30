import React from 'react';
import { useUserStore } from '../store/userStore';

interface ProfileDropdownProps {
  show: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ show, onMouseEnter, onMouseLeave }) => {
  const user = useUserStore((state) => state.user);

  if (!show) return null;

  return (
    <div 
      className="absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-white dark:bg-gray-800 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <img
            src={user?.avatarUrl || "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">{user?.name || "Guest"}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Cards Viewed</span>
              <span className="font-semibold text-gray-800 dark:text-white">{user?.cardsViewed || 0}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Points Earned</span>
              <span className="font-semibold text-gray-800 dark:text-white">{user?.points || 0}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-b-lg">
        <button className="w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">
          Settings
        </button>
        <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;