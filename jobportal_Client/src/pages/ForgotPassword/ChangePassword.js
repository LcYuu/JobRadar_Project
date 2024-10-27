import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { motion, AnimatePresence } from 'framer-motion';
import logo1 from '../../assets/images/common/logo1.jpg';

export default function ChangePassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState(null); // null, 'success', 'failure'
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Simulate API call to change password
      setTimeout(() => {
        setStatus('success');
      }, 1000);
    } else {
      setStatus('failure');
    }
  };

  const renderMessage = () => {
    return (
      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center text-green-600"
          >
            Mật khẩu đã được thay đổi thành công!
          </motion.div>
        )}
        {status === 'failure' && (
          <motion.div
            key="failure"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center text-red-600"
          >
            Mật khẩu không khớp. Vui lòng thử lại.
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg">
        <CardHeader className="border-b border-indigo-300">
          <div className="flex justify-center items-center mb-4">
            <a href="/"><img src={logo1} alt="JobRadar Logo" className="h-20 w-20" /></a>
          </div>
          <CardTitle className="text-2xl font-bold text-indigo-700 text-center">
            Thay đổi mật khẩu
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                Mật khẩu mới
              </label>
              <Input
                id="newPassword"
                type="password"
                placeholder="Nhập mật khẩu mới"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Xác nhận mật khẩu mới
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Nhập lại mật khẩu mới"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.div
                  key="change-button"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    Xác nhận thay đổi
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="login-button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button 
                    onClick={() => navigate('/auth/sign-in')}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    Quay lại trang đăng nhập
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
          <div className="mt-4">
            {renderMessage()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}