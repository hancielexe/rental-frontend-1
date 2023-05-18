import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Loading from "../components/Loading";
import { elements } from "chart.js";

function Expenses() {
    const axiosPrivate = useAxiosPrivate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [expenses, setExpenses] = useState([]);
    const sums = [0,0,0,0];

     //states for totals
     const [accTotal, setAccTotal] = useState(0);
     const [advTotal, setAdvTotal] = useState(0);
     const [maintTotal, setMaintTotal] = useState(0);
     const [officeTotal, setOfficeTotal] = useState(0);
     const [salaryTotal, setSalaryTotal] = useState(0);
     const [taxTotal, setTaxTotal] = useState(0);
     const [transpoTotal, setTranspoTotal] = useState(0);
     const [utilTotal, setUtilTotal] = useState(0);
     const [electQuiapoTotal, setElectQuiapoTotal] = useState(0);
     const [electSamTotal, setElectSamTotal] = useState(0);
     const [electTagTotal, setElectTagTotal] = useState(0);
     const [waterQuiapoTotal, setWaterQuiapoTotal] = useState(0);
     const [waterSamTotal, setWaterSamTotal] = useState(0);
     const [waterTagTotal, setWaterTagTotal] = useState(0);
     const [telQuiapoTotal, setTelQuiapoTotal] = useState(0);
     const [telSamTotal, setTelSamTotal] = useState(0);
     const [telTagTotal, setTelTagTotal] = useState(0);
     const [hostingTotal, setHostingTotal] = useState(0);
     const [otherTotal, setOtherTotal] = useState(0);
     const [elecTotal, setElecTotal] = useState(0);
     const [waterTotal, setWaterTotal] = useState(0);
     const [telTotal, setTelTotal] = useState(0);
     let total = 0;

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getExpenses = async () => {
            try {
                const response = await axiosPrivate.get(`/expenses`, {
                    signal: controller.signal,
                });

                const accTotal = response.data.reduce((acc, item) => acc + parseInt(item.accountingandlegal), 0);
                const advTotal = response.data.reduce((acc, item) => acc + parseInt(item.advertising), 0);
                const maintTotal = response.data.reduce((acc, item) => acc + parseInt(item.maintenanceandrepairs), 0);
                const officeTotal = response.data.reduce((acc, item) => acc + parseInt(item.officesupplies), 0); 
                const salaryTotal = response.data.reduce((acc, item) => acc + parseInt(item.salariesandwages), 0);
                const taxTotal = response.data.reduce((acc, item) => acc + parseInt(item.taxesandlicenses), 0);
                const transpoTotal = response.data.reduce((acc, item) => acc + parseInt(item.transportationandtravelexpenses), 0);
                const utilTotal = response.data.reduce((acc, item) => acc + parseInt(item.utilities), 0);  
                const electQuiapoTotal = response.data.reduce((acc, item) => acc + parseInt(item.quiapo.electricity), 0);
                const electSamTotal = response.data.reduce((acc, item) => acc + parseInt(item.sampaloc.electricity), 0);
                const electTagTotal = response.data.reduce((acc, item) => acc + parseInt(item.taguig.electricity), 0);
                const waterQuiapoTotal = response.data.reduce((acc, item) => acc + parseInt(item.quiapo.water), 0);
                const waterSamTotal = response.data.reduce((acc, item) => acc + parseInt(item.sampaloc.water), 0);
                const waterTagTotal = response.data.reduce((acc, item) => acc + parseInt(item.taguig.water), 0);
                const telQuiapoTotal = response.data.reduce((acc, item) => acc + parseInt(item.quiapo.telandint), 0);
                const telSamTotal = response.data.reduce((acc, item) => acc + parseInt(item.sampaloc.telandint), 0);
                const telTagTotal = response.data.reduce((acc, item) => acc + parseInt(item.taguig.telandint), 0);
                const hostingTotal = response.data.reduce((acc, item) => acc + parseInt(item.webhostinganddomains), 0);
                const otherTotal = response.data.reduce((acc, item) => acc + parseInt(item.other), 0);

                setAccTotal(accTotal);
                setAdvTotal(advTotal);
                setMaintTotal(maintTotal);
                setOfficeTotal(officeTotal);
                setSalaryTotal(salaryTotal);
                setTaxTotal(taxTotal);
                setTranspoTotal(transpoTotal);
                setUtilTotal(utilTotal);
                setElectQuiapoTotal(electQuiapoTotal);
                setElectSamTotal(electSamTotal);
                setElectTagTotal(electTagTotal);
                setWaterQuiapoTotal(waterQuiapoTotal);
                setWaterSamTotal(waterSamTotal);
                setWaterTagTotal(waterTagTotal);
                setTelQuiapoTotal(telQuiapoTotal);
                setTelSamTotal(telSamTotal);
                setTelTagTotal(telTagTotal);
                setHostingTotal(hostingTotal);
                setOtherTotal(otherTotal);
               
                isMounted && setExpenses(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        getExpenses();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, []);


    //get all sums of expenses
    for (let i = 0; i < expenses.length; i++){
        const { accountingandlegal, advertising, maintenanceandrepairs, officesupplies, salariesandwages, taxesandlicenses, transportationandtravelexpenses, utilities, webhostinganddomains, other } = expenses[i];
        const { quiapo: {electricity: quiapoelec, water: quiapowater, telandint: quiapoint} } = expenses[i];
        const { taguig: {electricity: taguigelec, water: taguigwater, telandint: taguigint} } = expenses[i];
        const { sampaloc: {electricity: samelec, water: samwater, telandint: samint} } = expenses[i];

        //add accounting and legal expenses
        let acc = parseInt(accountingandlegal);
        sums[i] += acc;

        //add accounting and legal expenses
        let adv = parseInt(advertising);
        sums[i] += adv;

        //add accounting and legal expenses
        let maint = parseInt(maintenanceandrepairs);
        sums[i] += maint;

        //add accounting and legal expenses
        let off = parseInt(officesupplies);
        sums[i] += off;

        //add accounting and legal expenses
        let salw = parseInt(salariesandwages);
        sums[i] += salw;
        
        //add accounting and legal expenses
        let tax = parseInt(taxesandlicenses);
        sums[i] += tax;
        
        //add accounting and legal expenses
        let transpo = parseInt(transportationandtravelexpenses);
        sums[i] += transpo;

        //add accounting and legal expenses
        let util = parseInt(utilities);
        sums[i] += util;

        //add accounting and legal expenses
        let web = parseInt(webhostinganddomains);
        sums[i] += web;

        //add accounting and legal expenses
        let oth = parseInt(other);
        sums[i] += oth;

        //add electricity and legal expenses
        let elec = parseInt(quiapoelec) + parseInt(taguigelec) + parseInt(samelec);
        sums[i] += elec;

        //add electricity and legal expenses
        let water = parseInt(quiapowater) + parseInt(taguigwater) + parseInt(samwater);
        sums[i] += water;

        //add electricity and legal expenses
        let int = parseInt(quiapoint) + parseInt(taguigint) + parseInt(samint);
        sums[i] += int;

        total += sums[i];
    }

    console.log(total);

    return (
        <div className="flex h-screen overflow-hidden ">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
                        <div class="rounded-t mb-0 px-4 py-3 border-0">
                            <div class="flex flex-wrap items-center">
                                <div class="relative w-full ml-2 max-w-full flex-grow flex-1">
                                    <h3 class="font-semibold text-lg tracking-wide">Expenses</h3>
                                </div>
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <div className="flex justify-end">
                                        <a href="#_" class="px-5 py-1.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
                                            Print
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="block w-full overflow-x-auto">
                            <table class="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="px-6 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                            Operating Expenses
                                        </th>
                                        <th class="px-5 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            January
                                        </th>
                                        <th class="px-5 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            February
                                        </th>
                                        <th class="px-5 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            March
                                        </th>
                                        <th class="px-5 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            April
                                        </th>
                                        <th class="px-5 text-gray-500 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                            TOTAL
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr class>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Accounting and Legal
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.accountingandlegal}
                                            </td>
                                        )))}
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {accTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Advertising
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.advertising}
                                            </td>
                                        )))}
                                         <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {advTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Maintenance and Repairs
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.maintenanceandrepairs}
                                            </td>
                                        )))}
                                         <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {maintTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Office Supplies
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.officesupplies}
                                            </td>
                                        )))}
                                         <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {officeTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Salaries and Wages
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.salariesandwages}
                                            </td>
                                        )))}
                                         <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {salaryTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Taxes and Wages
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.taxesandlicenses}
                                            </td>
                                        )))}
                                         <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {taxTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Transportation & Travel
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.transportationandtravelexpenses}
                                            </td>
                                        )))}
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {transpoTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Utilities
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.utilities}
                                            </td>
                                        )))}
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {utilTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Electricity - Quiapo
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.quiapo.electricity}
                                            </td>
                                        )))}
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {electQuiapoTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Electricity - Sampaloc
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.sampaloc.electricity}
                                            </td>
                                        )))}
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {electSamTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Electricity - Taguig
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.taguig.electricity}
                                            </td>
                                        )))}
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {electTagTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Water - Quiapo
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.quiapo.water}
                                            </td>
                                        )))}
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {waterQuiapoTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Water - Sampaloc
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.sampaloc.water}
                                            </td>
                                        )))}
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {waterSamTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Water - Taguig
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.taguig.water}
                                            </td>
                                        )))}
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {waterTagTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Telephone & Internet - Quiapo
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.quiapo.telandint}
                                            </td>
                                        )))}
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {telQuiapoTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Telephone & Internet - Sampaloc
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.sampaloc.telandint}
                                            </td>
                                        )))}
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {telSamTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Telephone & Internet - Taguig
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.taguig.telandint}
                                            </td>
                                        )))}
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {telTagTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Web Hosting and Domain
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.webhostinganddomains}
                                            </td>
                                        )))}
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {hostingTotal}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            Other
                                        </th>
                                        {expenses && (expenses.map((expense) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {expense.other}
                                            </td>
                                        )))}
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                                            {otherTotal}
                                        </td>
                                    </tr>
                                    <tr class="border border-solid">
                                        <th class="text-indigo-600 border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left tracking-wider">
                                            TOTAL
                                        </th>
                                        {sums && (sums.map((sum) => (
                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {sum}
                                            </td>
                                        )))}
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-bold whitespace-nowrap p-4 ">
                                            {total}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expenses;