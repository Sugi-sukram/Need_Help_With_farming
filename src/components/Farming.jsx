import React from 'react';
import { Card, Button, Statistic } from 'antd';

const Farming = () => {
  const farmingPools = [
    {
      id: 1,
      name: 'USDT-ETH LP',
      apr: '12.5%',
      tvl: '$1.2M',
      earned: '0.00',
      token: 'FARM',
      staked: '0.00'
    },
    {
      id: 2,
      name: 'BTC-ETH LP',
      apr: '15.8%',
      tvl: '$2.5M',
      earned: '0.00',
      token: 'FARM',
      staked: '0.00'
    },
    // Add more pools as needed
  ];

  return (
    <div className="min-h-screen bg-[#2851E3] px-4 py-8">
      {/* Header Section */}
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          Yield Farming
        </h1>
        
        {/* Total Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="bg-white/10 border-white/20">
            <Statistic 
              title={<span className="text-white/80">Total Value Locked</span>}
              value="$3.7M"
              className="text-white"
            />
          </Card>
          <Card className="bg-white/10 border-white/20">
            <Statistic 
              title={<span className="text-white/80">Total Daily Rewards</span>}
              value="25,000 FARM"
              className="text-white"
            />
          </Card>
          <Card className="bg-white/10 border-white/20">
            <Statistic 
              title={<span className="text-white/80">Number of Farmers</span>}
              value="1,234"
              className="text-white"
            />
          </Card>
        </div>

        {/* Farming Pools */}
        <div className="grid gap-6">
          {farmingPools.map(pool => (
            <Card 
              key={pool.id}
              className="bg-white/10 border-white/20"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
                {/* Pool Name */}
                <div className="md:col-span-1">
                  <h3 className="text-lg font-semibold text-white">{pool.name}</h3>
                  <p className="text-white/60">Farming Pool</p>
                </div>

                {/* APR */}
                <div className="md:col-span-1">
                  <p className="text-sm text-white/60">APR</p>
                  <p className="text-lg font-semibold text-white">{pool.apr}</p>
                </div>

                {/* TVL */}
                <div className="md:col-span-1">
                  <p className="text-sm text-white/60">TVL</p>
                  <p className="text-lg font-semibold text-white">{pool.tvl}</p>
                </div>

                {/* Earned */}
                <div className="md:col-span-1">
                  <p className="text-sm text-white/60">Earned</p>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-white">{pool.earned}</p>
                    <Button size="small" className="bg-white/20 text-white hover:bg-white/30">
                      Harvest
                    </Button>
                  </div>
                </div>

                {/* Staked */}
                <div className="md:col-span-1">
                  <p className="text-sm text-white/60">Staked</p>
                  <p className="text-lg font-semibold text-white">{pool.staked}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 md:col-span-1">
                  <Button className="flex-1 bg-white text-[#2851E3] hover:bg-gray-100">
                    Stake
                  </Button>
                  <Button className="flex-1 bg-white/10 text-white hover:bg-white/20">
                    Unstake
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Farming; 