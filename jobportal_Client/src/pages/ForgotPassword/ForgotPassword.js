import { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { motion, AnimatePresence } from 'framer-motion';
import logo1 from '../../assets/images/common/logo1.jpg';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // null, 'success', 'failure'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
      } else {
        setStatus('failure');
      }
    }, 1000);
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
            Hướng dẫn đặt lại mật khẩu đã được gửi đến email của bạn.
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
            Không tìm thấy tài khoản với email này. Vui lòng thử lại.
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
            Quên mật khẩu
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Địa chỉ email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Nhập địa chỉ email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              disabled={status === 'success'}
            >
              Gửi
            </Button>
          </form>
          <div className="mt-4">
            {renderMessage()}
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Nhớ mật khẩu?{" "}
            <a href="/auth/sign-in" className="font-medium text-indigo-600 hover:text-indigo-500">
              Đăng nhập
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}