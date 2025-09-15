import { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { GiLotusFlower } from "react-icons/gi";
import CherryBlossomBg from "./CherryBlossomBg";

const AuthPage = ({ authMode, setAuthMode, authData, setAuthData, handleAuth, loading }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 font-poppins">
      <CherryBlossomBg />
      
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-md border border-yellow-200/30"
        style={{
          boxShadow: '0 25px 50px -12px rgba(251, 191, 36, 0.25), 0 0 0 1px rgba(251, 191, 36, 0.1)'
        }}
      >
        {/* Divine Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 rounded-full mb-6 shadow-lg relative"
            style={{
              boxShadow: '0 10px 25px rgba(251, 191, 36, 0.4), 0 0 20px rgba(251, 191, 36, 0.2)'
            }}
          >
            <GiLotusFlower className="text-3xl text-white drop-shadow-sm" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300/20 to-transparent animate-pulse" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent mb-2"
          >
            GuruChatBot
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 text-sm font-medium"
          >
            Connect with Divine Wisdom
          </motion.p>
        </div>

        {/* Auth Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="flex mb-8 bg-yellow-50/80 rounded-2xl p-1.5 border border-yellow-200/50"
        >
          <button
            onClick={() => setAuthMode("login")}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
              authMode === "login"
                ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white shadow-lg transform scale-[1.02] font-bold"
                : "text-yellow-700 hover:text-yellow-800 hover:bg-yellow-100/50"
            }`}
            style={{
              boxShadow: authMode === "login" ? '0 6px 20px rgba(251, 191, 36, 0.4), 0 0 15px rgba(251, 191, 36, 0.2)' : 'none'
            }}
          >
            Login
          </button>
          <button
            onClick={() => setAuthMode("signup")}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
              authMode === "signup"
                ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white shadow-lg transform scale-[1.02] font-bold"
                : "text-yellow-700 hover:text-yellow-800 hover:bg-yellow-100/50"
            }`}
            style={{
              boxShadow: authMode === "signup" ? '0 6px 20px rgba(251, 191, 36, 0.4), 0 0 15px rgba(251, 191, 36, 0.2)' : 'none'
            }}
          >
            Create Account
          </button>
        </motion.div>

        {/* Auth Form */}
        <form onSubmit={handleAuth} className="space-y-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="relative"
          >
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-600 z-10">
              <FiUser className="text-lg" />
            </div>
            <input
              type="text"
              placeholder="Username"
              value={authData.username}
              onChange={(e) => setAuthData({...authData, username: e.target.value})}
              className="w-full pl-12 pr-4 py-4 bg-yellow-50/50 border-2 border-yellow-200/50 rounded-2xl focus:outline-none focus:border-yellow-400 focus:bg-white/90 transition-all duration-300 hover:bg-white/70 text-gray-700 font-medium placeholder-gray-500"
              style={{
                boxShadow: '0 2px 10px rgba(251, 191, 36, 0.1)'
              }}
              required
            />
          </motion.div>
          
          {authMode === "signup" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="relative"
            >
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-600 z-10">
                <FiMail className="text-lg" />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={authData.email}
                onChange={(e) => setAuthData({...authData, email: e.target.value})}
                className="w-full pl-12 pr-4 py-4 bg-yellow-50/50 border-2 border-yellow-200/50 rounded-2xl focus:outline-none focus:border-yellow-400 focus:bg-white/90 transition-all duration-300 hover:bg-white/70 text-gray-700 font-medium placeholder-gray-500"
                style={{
                  boxShadow: '0 2px 10px rgba(251, 191, 36, 0.1)'
                }}
                required
              />
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-600 z-10">
              <FiLock className="text-lg" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={authData.password}
              onChange={(e) => setAuthData({...authData, password: e.target.value})}
              className="w-full pl-12 pr-12 py-4 bg-yellow-50/50 border-2 border-yellow-200/50 rounded-2xl focus:outline-none focus:border-yellow-400 focus:bg-white/90 transition-all duration-300 hover:bg-white/70 text-gray-700 font-medium placeholder-gray-500"
              style={{
                boxShadow: '0 2px 10px rgba(251, 191, 36, 0.1)'
              }}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-600 hover:text-yellow-700 transition-colors z-10"
            >
              {showPassword ? <FiEyeOff className="text-lg" /> : <FiEye className="text-lg" />}
            </button>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white py-4 rounded-2xl font-semibold text-lg hover:from-yellow-500 hover:to-amber-600 disabled:opacity-50 transition-all duration-300 relative overflow-hidden"
            style={{
              boxShadow: '0 8px 25px rgba(251, 191, 36, 0.4), 0 0 20px rgba(251, 191, 36, 0.1)'
            }}
          >
            {loading && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            )}
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <GiLotusFlower className="text-xl" />
                  </motion.div>
                  Connecting...
                </>
              ) : (
                authMode === "login" ? "Enter Sacred Space" : "Begin Spiritual Journey"
              )}
            </span>
          </motion.button>
        </form>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center space-y-3"
        >
          {authMode === "login" && (
            <button className="text-sm text-yellow-600 hover:text-yellow-700 font-medium transition-colors">
              Forgot password?
            </button>
          )}
          
          <div className="text-sm text-gray-500">
            {authMode === "login" ? (
              <span>
                New to spiritual guidance?{" "}
                <button
                  onClick={() => setAuthMode("signup")}
                  className="text-yellow-600 hover:text-yellow-700 font-semibold transition-colors"
                >
                  Create Account
                </button>
              </span>
            ) : (
              <span>
                Already a member?{" "}
                <button
                  onClick={() => setAuthMode("login")}
                  className="text-yellow-600 hover:text-yellow-700 font-semibold transition-colors"
                >
                  Sign In
                </button>
              </span>
            )}
          </div>
        </motion.div>

        {/* Divine Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-gray-500 italic leading-relaxed">
            "The soul is neither born, and nor does it die."
          </p>
          <p className="text-xs text-yellow-600 font-semibold mt-1">- Bhagavad Gita</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthPage;