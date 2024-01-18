import React from 'react'
import {
	CCard,
	CCardBody,
	CCardGroup,
	CCardHeader,
	CCol,
	CLink,
	CRow,
	CWidgetStatsB,
	CWidgetStatsC,
	CWidgetStatsE,
	CWidgetStatsF,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { BarChart } from '@mui/x-charts/BarChart';
import {
	cilArrowRight,
	cilBasket,
	cilBell,
	cilChartPie,
	cilMoon,
	cilLaptop,
	cilPeople,
	cilSettings,
	cilSpeech,
	cilSpeedometer,
	cilUser,
	cilUserFollow,
} from '@coreui/icons'
import { DocsExample } from 'src/components'

import { CChart } from '@coreui/react-chartjs'

import WidgetsBrand from '../../views/widgets/WidgetsBrand';
import WidgetsDropdown from '../../views/widgets/WidgetsDropdown'

import {
	CDropdown,
	CDropdownMenu,
	CDropdownItem,
	CDropdownToggle,
	CWidgetStatsA,
} from '@coreui/react'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'


const Statistic = ( props ) => {
	const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

	const chartSetting = {
		xAxis: [
			{
				label: 'validee',
			},
		],
		width: 500,
		height: 400,
	};
	const dataset = [
		{
			seoul: 21,
			month: 'Jan',
		},
		{
			seoul: 28,
			month: 'Fev',
		},
		{
			seoul: 41,
			month: 'Mar',
		},
		{
			seoul: 73,
			month: 'Apr',
		},
		{
			seoul: 99,
			month: 'May',
		},
		{
			seoul: 144,
			month: 'June',
		},
		{
			seoul: 319,
			month: 'July',
		},
		{
			seoul: 249,
			month: 'Aug',
		},
		{
			seoul: 131,
			month: 'Sept',
		},
		{
			seoul: 55,
			month: 'Oct',
		},
		{
			seoul: 48,
			month: 'Nov',
		},
		{
			seoul: 25,
			month: 'Dec',
		},
	];

	const valueFormatter = (value) => `${value}`;
	
	return(
		<div>
		<div>
			<BarChart
				dataset={dataset}
				yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
				series={[{ dataKey: 'seoul', label: 'Nombre d\'annonces', valueFormatter }]}
				layout="horizontal"
				{...chartSetting}
			/>
		</div>
			<CRow>
				<CCol xs={12} sm={6} lg={3}>
					<CWidgetStatsB
						className="mb-4"
						progress={{ color: 'success', value: 89.9 }}
						text="Lorem ipsum dolor sit amet enim."
						title="Widget title"
						value="89.9%"
					/>
				</CCol>
				<CCol xs={12} sm={6} lg={3}>
					<CWidgetStatsB
						className="mb-4"
						progress={{ color: 'success', value: 89.9 }}
						text="Lorem ipsum dolor sit amet enim."
						title="Widget title"
						value="89.9%"
					/>
				</CCol>

				<CCol sm={6} lg={3}>
					<CWidgetStatsA
						className="mb-4"
						color="primary"
						value={
							<>
								26K{' '}
								<span className="fs-6 fw-normal">
									(-12.4% <CIcon icon={cilArrowBottom} />)
								</span>
							</>
						}
						title="Users"
						chart={
							<CChartLine
								className="mt-3 mx-3"
								style={{ height: '70px' }}
								data={{
									labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
									datasets: [
										{
											label: 'My First dataset',
											backgroundColor: 'transparent',
											borderColor: 'rgba(255,255,255,.55)',
											pointBackgroundColor: getStyle('--cui-primary'),
											data: [65, 59, 84, 84, 51, 55, 40],
										},
									],
								}}
								options={{
									plugins: {
										legend: {
											display: false,
										},
									},
									maintainAspectRatio: false,
									scales: {
										x: {
											grid: {
												display: false,
												drawBorder: false,
											},
											ticks: {
												display: false,
											},
										},
										y: {
											min: 30,
											max: 89,
											display: false,
											grid: {
												display: false,
											},
											ticks: {
												display: false,
											},
										},
									},
									elements: {
										line: {
											borderWidth: 1,
											tension: 0.4,
										},
										point: {
											radius: 4,
											hitRadius: 10,
											hoverRadius: 4,
										},
									},
								}}
							/>
						}
					/>
				</CCol>
			</CRow>
			<CRow>
				<CCol xs={12} sm={6} lg={3}>
					<CWidgetStatsF
						className="mb-3"
						icon={<CIcon width={24} icon={cilSettings} size="xl" />}
						title="income"
						value="$1.999,50"
						color="primary"
					/>
				</CCol>
				<CCol xs={12} sm={6} lg={3}>
					<CWidgetStatsF
						className="mb-3"
						icon={<CIcon width={24} icon={cilUser} size="xl" />}
						title="income"
						value="$1.999,50"
						color="info"
					/>
				</CCol>
				<CCol xs={12} sm={6} lg={3}>
					<CWidgetStatsF
						className="mb-3"
						icon={<CIcon width={24} icon={cilMoon} size="xl" />}
						title="income"
						value="$1.999,50"
						color="warning"
					/>
				</CCol>
				<CCol xs={12} sm={6} lg={3}>
					<CWidgetStatsF
						className="mb-3"
						icon={<CIcon width={24} icon={cilBell} size="xl" />}
						title="income"
						value="$1.999,50"
						color="danger"
					/>
				</CCol>
			</CRow>
			<CRow>
				<CCardGroup className="mb-4">
					<CWidgetStatsC
						icon={<CIcon icon={cilPeople} height={36} />}
						value="87.500"
						title="Visitors"
						progress={{ color: 'info', value: 75 }}
					/>
					<CWidgetStatsC
						icon={<CIcon icon={cilUserFollow} height={36} />}
						value="385"
						title="New Clients"
						progress={{ color: 'success', value: 75 }}
					/>
					<CWidgetStatsC
						icon={<CIcon icon={cilBasket} height={36} />}
						value="1238"
						title="Products sold"
						progress={{ color: 'warning', value: 75 }}
					/>
					<CWidgetStatsC
						icon={<CIcon icon={cilChartPie} height={36} />}
						value="28%"
						title="Returning Visitors"
						progress={{ color: 'primary', value: 75 }}
					/>
				</CCardGroup>
			</CRow>
		<div/>
	</div>
	);
};

export default Statistic;