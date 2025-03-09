import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table } from "@/components/ui/table";
import { motion } from "framer-motion";

const HealthcareQueueApp = () => {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");
  const [ailment, setAilment] = useState("");

  useEffect(() => {
    // Simulate real-time queue updates
    const interval = setInterval(() => {
      if (patients.length > 0) {
        setPatients((prev) => prev.slice(1));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [patients]);

  const addPatient = () => {
    if (name && ailment) {
      setPatients([...patients, { name, ailment, id: Date.now() }]);
      setName("");
      setAilment("");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <motion.h1
        className="text-xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Healthcare Queue Management
      </motion.h1>

      <Card className="p-4 mb-4">
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            <Input
              placeholder="Patient Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Ailment"
              value={ailment}
              onChange={(e) => setAilment(e.target.value)}
            />
            <Button onClick={addPatient}>Add to Queue</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Current Queue</h2>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Ailment</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.name}</td>
                  <td>{patient.ailment}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthcareQueueApp;
