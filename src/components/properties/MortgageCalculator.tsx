import React, { useState, useEffect } from 'react';
import { DollarSign, Percent, Calendar } from 'lucide-react';

interface MortgageCalculatorProps {
  propertyPrice: number;
}

const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({ propertyPrice }) => {
  const [loanAmount, setLoanAmount] = useState<number>(propertyPrice * 0.8); // Default 20% down payment
  const [interestRate, setInterestRate] = useState<number>(4.5);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [downPayment, setDownPayment] = useState<number>(propertyPrice * 0.2);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  // Update loan amount when property price or down payment changes
  useEffect(() => {
    const newLoanAmount = propertyPrice - downPayment;
    setLoanAmount(newLoanAmount);
  }, [propertyPrice, downPayment]);

  // Update down payment when property price or loan amount changes
  const updateDownPayment = (amount: number) => {
    const newDownPayment = propertyPrice - amount;
    setDownPayment(newDownPayment);
  };

  // Calculate monthly payment
  useEffect(() => {
    if (loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
      setMonthlyPayment(0);
      return;
    }

    // Convert annual interest rate to monthly and from percentage to decimal
    const monthlyInterestRate = interestRate / 100 / 12;
    
    // Convert loan term to months
    const loanTermMonths = loanTerm * 12;
    
    // Calculate monthly payment using the mortgage formula
    const monthlyPayment = loanAmount * 
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths)) / 
      (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);
    
    setMonthlyPayment(monthlyPayment);
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Mortgage Calculator</h3>
      
      <div className="space-y-4">
        {/* Property Price */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Property Price
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="w-5 h-5 text-neutral-500" />
            </div>
            <input
              type="number"
              value={propertyPrice}
              disabled
              className="form-input pl-10 w-full bg-neutral-100 cursor-not-allowed"
            />
          </div>
        </div>
        
        {/* Down Payment */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Down Payment ({((downPayment / propertyPrice) * 100).toFixed(0)}%)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="w-5 h-5 text-neutral-500" />
            </div>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value) && value >= 0 && value <= propertyPrice) {
                  setDownPayment(value);
                }
              }}
              className="form-input pl-10 w-full"
              min="0"
              max={propertyPrice}
              step="1000"
            />
          </div>
        </div>
        
        {/* Loan Amount */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Loan Amount
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="w-5 h-5 text-neutral-500" />
            </div>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value) && value >= 0 && value <= propertyPrice) {
                  setLoanAmount(value);
                  updateDownPayment(value);
                }
              }}
              className="form-input pl-10 w-full"
              min="0"
              max={propertyPrice}
              step="1000"
            />
          </div>
        </div>
        
        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Interest Rate
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Percent className="w-5 h-5 text-neutral-500" />
            </div>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value) && value >= 0) {
                  setInterestRate(value);
                }
              }}
              className="form-input pl-10 w-full"
              min="0"
              step="0.125"
            />
          </div>
        </div>
        
        {/* Loan Term */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Loan Term (Years)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="w-5 h-5 text-neutral-500" />
            </div>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(parseInt(e.target.value))}
              className="form-input pl-10 w-full"
            >
              <option value="10">10 years</option>
              <option value="15">15 years</option>
              <option value="20">20 years</option>
              <option value="25">25 years</option>
              <option value="30">30 years</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Result */}
      <div className="mt-6 bg-primary-50 p-4 rounded-lg">
        <div className="text-center">
          <div className="text-sm text-neutral-600 mb-1">Estimated Monthly Payment</div>
          <div className="text-3xl font-bold text-primary-700">
            ${monthlyPayment.toFixed(2)}
          </div>
          <div className="text-xs text-neutral-500 mt-1">
            Principal and Interest only
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-neutral-500 text-center">
        This calculator provides an estimate. Actual payment may vary based on taxes, insurance, and other factors.
      </div>
    </div>
  );
};

export default MortgageCalculator;