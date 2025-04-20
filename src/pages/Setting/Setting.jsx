import React from "react";

const Setting = () => {
  return (
    <div className="bg-[#002140]">
      <div className="bg-[#002140] font-sans container ml-[250px] -mt-[720px] py-12 px-4 md:px-6 w-auto">
        <div className="bg-gradient-to-r from-black to-[#003a6c] text-white py-6  rounded-2xl">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center ">
              <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium transition-colors flex items-center gap-2">
                <i className="fas fa-save"></i> Save Changes
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-r from-black via-black/25 to-transparent rounded-xl shadow-md overflow-hidden sticky top-4">
                <div className="bg-gradient-to-r from-black to-[#003a6c] text-white px-6 py-4">
                  <h2 className="text-xl font-bold">Settings Menu</h2>
                </div>
                <div className="p-2">
                  <nav className="space-y-1">
                    <a
                      href="#account"
                      className="block px-4 py-3 rounded-lg bg-[#ff4d4d] text-white font-medium"
                    >
                      <i className="fas fa-user-circle mr-3"></i> Account Settings
                    </a>
                    <a
                      href="#profile"
                      className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <i className="fas fa-id-card mr-3"></i> Profile Information
                    </a>
                    <a
                      href="#privacy"
                      className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <i className="fas fa-shield-alt mr-3"></i> Privacy & Security
                    </a>
                    <a
                      href="#notifications"
                      className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <i className="fas fa-bell mr-3"></i> Notifications
                    </a>
                    <a
                      href="#billing"
                      className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <i className="fas fa-credit-card mr-3"></i> Billing &
                      Subscription
                    </a>
                    <a
                      href="#preferences"
                      className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <i className="fas fa-sliders-h mr-3"></i> Preferences
                    </a>
                    <a
                      href="#integrations"
                      className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <i className="fas fa-link mr-3"></i> Integrations
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-8">
              <div
                id="account"
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="px-6 py-4 bg-gray-50 border-b">
                  <h3 className="text-lg font-bold text-gray-800">
                    Account Settings
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        for="username"
                      >
                        Username
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        value="johndoe"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        for="email"
                      >
                        Email Address
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        value="john.doe@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-700 mb-3">
                      Change Password
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          for="current-password"
                        >
                          Current Password
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="current-password"
                          type="password"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          for="new-password"
                        >
                          New Password
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="new-password"
                          type="password"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          for="confirm-password"
                        >
                          Confirm New Password
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="confirm-password"
                          type="password"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-700 mb-3">Account Status</h4>
                    <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                      <i className="fas fa-gem text-blue-500 text-2xl mr-4"></i>
                      <div>
                        <p className="font-medium text-gray-800">Premium Member</p>
                        <p className="text-gray-600 text-sm">
                          Your premium membership is active until April 15, 2026
                        </p>
                      </div>
                      <a
                        href="#"
                        className="ml-auto text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Manage Subscription
                      </a>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-bold mb-3 text-red-600">Danger Zone</h4>
                    <div className="flex flex-col md:flex-row md:items-center justify-between bg-red-50 p-4 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">
                          Deactivate Account
                        </p>
                        <p className="text-gray-600 text-sm">
                          Temporarily disable your account
                        </p>
                      </div>
                      <button className="mt-3 md:mt-0 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors">
                        Deactivate
                      </button>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between bg-red-50 p-4 rounded-lg mt-4">
                      <div>
                        <p className="font-medium text-gray-800">Delete Account</p>
                        <p className="text-gray-600 text-sm">
                          Permanently delete your account and all data
                        </p>
                      </div>
                      <button className="mt-3 md:mt-0 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="privacy"
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="px-6 py-4 bg-gray-50 border-b">
                  <h3 className="text-lg font-bold text-gray-800">
                    Privacy & Security
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-700 mb-3">
                      Privacy Settings
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-800">
                            Profile Visibility
                          </p>
                          <p className="text-gray-600 text-sm">
                            Control who can view your profile
                          </p>
                        </div>
                        <select className="border rounded-lg py-2 px-4 text-gray-700">
                          <option>Public</option>
                          <option>Friends Only</option>
                          <option>Private</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-800">
                            Show Email Address
                          </p>
                          <p className="text-gray-600 text-sm">
                            Allow others to see your email
                          </p>
                        </div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-800">
                            Activity Status
                          </p>
                          <p className="text-gray-600 text-sm">
                            Show when you're active on the platform
                          </p>
                        </div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            checked
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-bold text-gray-700 mb-3">Security</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-800">
                            Two-Factor Authentication
                          </p>
                          <p className="text-gray-600 text-sm">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors">
                          Enable
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-800">Login History</p>
                          <p className="text-gray-600 text-sm">
                            View your recent login sessions
                          </p>
                        </div>
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors">
                          View History
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="notifications"
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="px-6 py-4 bg-gray-50 border-b">
                  <h3 className="text-lg font-bold text-gray-800">Notifications</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-700 mb-3">
                        Email Notifications
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">
                              New Followers
                            </p>
                            <p className="text-gray-600 text-sm">
                              Get notified when someone follows you
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              className="sr-only peer"
                              checked
                            />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">
                              Comments & Replies
                            </p>
                            <p className="text-gray-600 text-sm">
                              Get notified about comments on your posts
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              className="sr-only peer"
                              checked
                            />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">Newsletter</p>
                            <p className="text-gray-600 text-sm">
                              Weekly digest of top recipes and articles
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              className="sr-only peer"
                            />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="font-bold text-gray-700 mb-3">
                        Push Notifications
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">
                              Direct Messages
                            </p>
                            <p className="text-gray-600 text-sm">
                              Get notified when you receive a message
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              className="sr-only peer"
                              checked
                            />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">
                              Likes & Reactions
                            </p>
                            <p className="text-gray-600 text-sm">
                              Get notified when someone likes your content
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              className="sr-only peer"
                            />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-gradient-to-r from-black to-[#003a6c] text-white py-8 mt-16 rounded-2xl">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Taste'n Talk</h2>
                <p className="text-gray-300">Connect with food lovers worldwide</p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i className="fab fa-youtube text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i className="fab fa-pinterest text-xl"></i>
                </a>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300 text-sm">
              <p>&copy; 2025 Taste'n Talk. All rights reserved.</p>
            </div>
          </div>
        </footer>
        {/* <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    document.querySelectorAll('nav a').forEach(link => {
                        link.classNameList.remove('bg-[#ff4d4d]', 'text-white');
                        link.classNameList.add('text-gray-300');
                    });
                    
                    this.classNameList.remove('text-gray-300');
                    this.classNameList.add('bg-[#ff4d4d]', 'text-white');
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
            const saveChangesBtn = document.querySelector('button:contains("Save Changes")');
            if (saveChangesBtn) {
                saveChangesBtn.addEventListener('click', function() {
                    alert('Settings saved successfully!');
                });
            }
        });
    </script> */}
      </div>
    </div>
  );
};

export default Setting;
