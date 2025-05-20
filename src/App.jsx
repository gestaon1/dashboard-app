import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, AreaChart, Area, CartesianGrid } from 'recharts';

const dataKPIs = {
  totalLeads: 320,
  metaAds: 210,
  googleAds: 110,
};

const graficoPrincipal = [
  { dia: '1', valor: 0 },
  { dia: '2', valor: 210 },
  { dia: '3', valor: 110 },
];

const porPlataforma = [
  { plataforma: 'Meta Ads', leads: 210 },
  { plataforma: 'Google Ads', leads: 110 },
];

const porCampanha = [
  { campanha: 'Ad 1', agendamentos: 60 },
  { campanha: 'Ad 11', agendamentos: 50 },
  { campanha: 'Ad 8', agendamentos: 40 },
  { campanha: 'Ad 4', agendamentos: 30 },
  { campanha: 'Ad 3', agendamentos: 30 },
  { campanha: 'Ad 2', agendamentos: 30 },
  { campanha: 'Ad 7', agendamentos: 20 },
];

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>Dashboard</h1>
      <div style={{ display: 'flex', gap: 20, marginTop: 20 }}>
        <div><strong>Leads:</strong><br />{dataKPIs.totalLeads}</div>
        <div><strong>Meta Ads:</strong><br />{dataKPIs.metaAds}</div>
        <div><strong>Google Ads:</strong><br />{dataKPIs.googleAds}</div>
      </div>

      <h2 style={{ marginTop: 40 }}>Desempenho</h2>
      <AreaChart width={600} height={200} data={graficoPrincipal}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dia" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="valor" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>

      <h2 style={{ marginTop: 40 }}>Leads por Plataforma</h2>
      <BarChart width={600} height={200} data={porPlataforma}>
        <XAxis dataKey="plataforma" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="leads" fill="#4f46e5" />
      </BarChart>

      <h2 style={{ marginTop: 40 }}>Agendamentos por Campanha</h2>
      <BarChart width={600} height={250} data={porCampanha}>
        <XAxis dataKey="campanha" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="agendamentos" fill="#60a5fa" />
      </BarChart>
    </div>
  );
}