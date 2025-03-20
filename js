import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <motion.h1 
        className="text-4xl font-bold mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Jose Chavarri - Software Developer
      </motion.h1>
      
      <motion.p 
        className="text-gray-400 mt-4 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Passionate about building efficient and scalable web applications. Experience in Java, JavaScript, React, and more.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {["Project 1", "Project 2", "Project 3"].map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <CardContent>
                <h2 className="text-xl font-semibold">{project}</h2>
                <p className="text-gray-400 mt-2">A short description of the project.</p>
                <Button className="mt-4" variant="outline">View Details</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-gray-400 mt-2">Feel free to contact me for collaboration or job opportunities.</p>
        <Button className="mt-4 bg-blue-500 hover:bg-blue-600">Contact Me</Button>
      </motion.div>
    </div>
  );
}
