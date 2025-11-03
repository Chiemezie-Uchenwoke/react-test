import { useCallback, useEffect, useMemo, useState } from "react";
import expenses from "../../data/expenses";
import ExpenseItem from "./ExpenseItem";
import { Link } from "react-router";

const Expense = () => {
    const [newExpense, setNewExpense] = useState({
        expenseName: "",
        amount: ""
    });
    const [allExpense, setAllExpense] = useState([]);
    const [next, setNext] = useState(3);

    useEffect(() => {
        setAllExpense(expenses);
    }, []);

    const handleAddNewExpense = useCallback((e) => {
        e.preventDefault();

        if (!newExpense.expenseName || !newExpense.amount) return;
        
        setAllExpense((prev) => [...prev, {id: prev.length + 1, name: newExpense.expenseName, amount: newExpense.amount}]);

        setNewExpense({
            expenseName: "",
            amount: ""
        });
    }, [newExpense]);

    const expenseTotal = useMemo(() => {
        return allExpense.reduce((acc, item) => acc + Number(item.amount), 0);
    }, [allExpense]);

    return (
        <section className="flex flex-col gap-4">
            <Link to={"/"} className="underline">Home</Link>
    
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <h3>Add new expense</h3>

                    <p>
                        Total expense: ${expenseTotal}
                    </p>
                </div>
                <form 
                    className="flex gap-4"
                    onSubmit={handleAddNewExpense}
                >
                    <input 
                        type="text" 
                        placeholder="Expense name" 
                        className="border w-full max-w-80 h-10 rounded-2xl px-3"
                        value={newExpense.expenseName}
                        onChange={(e) => setNewExpense({...newExpense, expenseName: e.target.value}) }
                    />
                    <input 
                        type="number" 
                        className="border w-full max-w-80 h-10 rounded-2xl px-3"
                        value={newExpense.amount}
                        onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                    />
                    <button 
                        className="bg-yellow-400 py-2 px-8 rounded-2xl font-medium cursor-pointer self-start"
                    >
                        Save
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-3 gap-8">
                {
                    allExpense.slice(0, next).map((expense) => {
                        return (
                            <ExpenseItem 
                                key={expense.id}
                                {...expense}
                            />
                        )
                    })
                }

            </div>

            {
                next < allExpense.length &&
                <button
                    className="bg-yellow-400 py-2 px-8 rounded-2xl font-medium cursor-pointer self-start"
                    onClick={() => setNext(prev => Math.min(prev + 3, allExpense.length))}
                >
                    See More 
                </button>
            }

        </section>
    )
}

export default Expense;