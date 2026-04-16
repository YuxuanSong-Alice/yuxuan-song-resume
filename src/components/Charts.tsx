import React, { useState } from 'react';
import {
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';
import {
  czechMarketGrowthData,
  marketPerformanceData,
  modelOptimizationData,
  merchantSatisfactionData,
  operationalEfficiencyData,
} from '../data/charts';
import { useLanguage } from '../context/LanguageContext';

const modelMetricLabelsEn: Record<string, string> = {
  '风险识别准确率 (%)': 'Risk detection accuracy (%)',
  '误判率降低': 'False positive reduction',
  '负面反馈减少': 'Negative feedback reduction',
};

const efficiencyMetricLabelsEn: Record<string, string> = {
  '日均订单处理': 'Daily orders reviewed',
  '外包人工减少': 'Outsourced manual work',
};

const Charts: React.FC = () => {
  const { language } = useLanguage();
  const modelChartData =
    language === 'en'
      ? modelOptimizationData.map((row) => ({
          ...row,
          metric: modelMetricLabelsEn[row.metric] ?? row.metric,
        }))
      : modelOptimizationData;
  const efficiencyChartData =
    language === 'en'
      ? operationalEfficiencyData.map((row) => ({
          ...row,
          metric: efficiencyMetricLabelsEn[row.metric] ?? row.metric,
        }))
      : operationalEfficiencyData;
  const satisfactionChartData =
    language === 'en'
      ? merchantSatisfactionData.map((row) => ({
          ...row,
          phase: row.phase === '优化前' ? 'Before' : 'After',
        }))
      : merchantSatisfactionData;
  const [activeChart, setActiveChart] = useState<'czech' | 'market' | 'model' | 'satisfaction' | 'efficiency'>('czech');

  const chartTitles = {
    czech: language === 'zh' ? '捷克市场增长趋势' : 'Czech Market Growth Trend',
    market: language === 'zh' ? '各市场表现对比' : 'Market Performance Comparison',
    model: language === 'zh' ? '大模型优化效果' : 'Model Optimization Results',
    satisfaction: language === 'zh' ? '用户满意度与服务求助率' : 'User Satisfaction & Help-seeking Rate',
    efficiency: language === 'zh' ? '运营效率提升' : 'Operational Efficiency Improvement',
  };

  const buttonLabels = {
    czech: language === 'zh' ? '捷克增长' : 'Czech Growth',
    market: language === 'zh' ? '市场对比' : 'Market Compare',
    model: language === 'zh' ? '模型优化' : 'Model Opt.',
    satisfaction: language === 'zh' ? '用户满意度' : 'Satisfaction',
    efficiency: language === 'zh' ? '运营效率' : 'Efficiency',
  };

  return (
    <section className="py-16 border-b border-blue-100">
      <h2 className="section-title">
        {language === 'zh' ? '核心项目可视化' : 'Project Visualization'}
      </h2>

      {/* 图表选择按钮 */}
      <div className="flex flex-wrap gap-3 mb-8">
        {(['czech', 'market', 'model', 'satisfaction', 'efficiency'] as const).map((chart) => (
          <button
            key={chart}
            onClick={() => setActiveChart(chart)}
            className={`btn-secondary ${activeChart === chart ? 'active' : ''}`}
          >
            {buttonLabels[chart]}
          </button>
        ))}
      </div>

      {/* 图表容器 */}
      <div className="chart-container">
        <h3 className="text-lg font-bold text-gray-900 mb-6">{chartTitles[activeChart]}</h3>

        {/* 捷克市场增长 */}
        {activeChart === 'czech' && (
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={czechMarketGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 102, 204, 0.1)" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid rgba(0, 102, 204, 0.2)' }} />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="gmv"
                stroke="#0066cc"
                name={language === 'zh' ? 'GMV增长 (%)' : 'GMV Growth (%)'}
                strokeWidth={3}
                dot={{ fill: '#0066cc', r: 5 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="downloads"
                stroke="#10b981"
                name={language === 'zh' ? '下载率提升 (%)' : 'Download Growth (%)'}
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 5 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        )}

        {/* 市场对比 */}
        {activeChart === 'market' && (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={marketPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 102, 204, 0.1)" />
              <XAxis dataKey="market" />
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid rgba(0, 102, 204, 0.2)' }} />
              <Legend />
              <Bar
                dataKey="gmvGrowth"
                fill="#0066cc"
                name={language === 'zh' ? 'GMV增长 (%)' : 'GMV Growth (%)'}
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="downloadGrowth"
                fill="#10b981"
                name={language === 'zh' ? '下载率提升 (%)' : 'Download Growth (%)'}
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}

        {/* 模型优化 */}
        {activeChart === 'model' && (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={modelChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 102, 204, 0.1)" />
              <XAxis dataKey="metric" />
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid rgba(0, 102, 204, 0.2)' }} />
              <Legend />
              <Bar
                dataKey="before"
                fill="#ef4444"
                name={language === 'zh' ? '优化前' : 'Before'}
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="after"
                fill="#10b981"
                name={language === 'zh' ? '优化后' : 'After'}
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}

        {/* 商家满意度 */}
        {activeChart === 'satisfaction' && (
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={satisfactionChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 102, 204, 0.1)" />
              <XAxis dataKey="phase" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid rgba(0, 102, 204, 0.2)' }} />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="seekHelpRate"
                fill="#ef4444"
                name={language === 'zh' ? '求助率 (%)' : 'Help-seeking Rate (%)'}
                radius={[8, 8, 0, 0]}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="satisfaction"
                stroke="#10b981"
                name={language === 'zh' ? '满意度' : 'Satisfaction'}
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 5 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        )}

        {/* 运营效率 */}
        {activeChart === 'efficiency' && (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={efficiencyChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 102, 204, 0.1)" />
              <XAxis dataKey="metric" />
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid rgba(0, 102, 204, 0.2)' }} />
              <Legend />
              <Bar
                dataKey="before"
                fill="#f59e0b"
                name={language === 'zh' ? '优化前' : 'Before'}
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="after"
                fill="#10b981"
                name={language === 'zh' ? '优化后' : 'After'}
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* 图表说明 */}
      <div className="info-box mt-6">
        <p className="text-sm text-gray-700">
          💡 <span className="font-semibold">{language === 'zh' ? '提示' : 'Tip'}:</span> {language === 'zh'
            ? '点击上方按钮切换不同的项目可视化图表，了解各项目的具体成果数据。'
            : 'Click the buttons above to switch between different project visualizations and see detailed performance data.'}
        </p>
      </div>
    </section>
  );
};

export default Charts;
